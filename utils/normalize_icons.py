import os
import re
import glob
import base64
import io
from PIL import Image

def normalize_icons():
    source_dir = 'icons'
    target_dir = 'icons_normalized'
    
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)
        
    files = glob.glob(os.path.join(source_dir, '*.svg'))
    
    print(f"Found {len(files)} icons to process.")
    
    # Regex to capture href value (either double or single quotes)
    # Handles data:image...
    href_pattern = re.compile(r'<image[^>]+(?:xlink:)?href=["\'](data:[^"\']+)["\']')
    
    for file_path in files:
        filename = os.path.basename(file_path)
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        match = href_pattern.search(content)
        if match:
            base64_data = match.group(1)
            
            # Extract the actual data part
            if ',' in base64_data:
                header, data_str = base64_data.split(',', 1)
            else:
                data_str = base64_data

            try:
                # Decode base64
                image_data = base64.b64decode(data_str)
                image = Image.open(io.BytesIO(image_data))
                
                # Get bounding box with alpha threshold
                # Some images have artifact pixels with alpha=1 at edges
                if image.mode == 'RGBA':
                    # Extract alpha channel
                    alpha = image.split()[-1]
                    # Threshold alpha: set values < 16 to 0, others to 255
                    # This removes barely visible pixels
                    mask = alpha.point(lambda p: 255 if p > 16 else 0)
                    bbox = mask.getbbox()
                else:
                    bbox = image.getbbox()
                
                if bbox:
                    min_x, min_y, max_x, max_y = bbox
                    width = max_x - min_x
                    height = max_y - min_y
                    
                    # Margin isn't requested but tight crop is risky if edges are anti-aliased heavily?
                    # User asked for "extreme pixels ... touch the boundaries". So tight crop is correct.
                    
                    # Construct new SVG with tight viewBox
                    new_svg = (
                        f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" '
                        f'width="100%" height="100%" '
                        f'viewBox="{min_x} {min_y} {width} {height}" '
                        f'preserveAspectRatio="xMidYMid meet">'
                        f'<image width="{image.width}" height="{image.height}" x="0" y="0" href="{base64_data}"/>'
                        f'</svg>'
                    )
                    
                    # We are overwriting the original icons directory as requested by the plan imply logic
                    # actually user plan said overwrite icons/ or write to icons_normalized/
                    # Let's write to icons/ directly as the user said "modify the normalization script to crop exactly to the icon content"
                    # But the script originally wrote to target_dir = 'icons_normalized'.
                    # Let's stick to the script's `target_dir` logic but maybe we should point target_dir to icons?
                    # The prompt says "run normalization script on icons/" and "overwrite them".
                    # However, the script has source_dir='icons' and target_dir='icons_normalized'.
                    # I will keep target_dir='icons_normalized' for safety first, then we can copy them over if needed, or if the user wants me to overwrite I can change target_dir.
                    # The user prompt: "This will overwrite files in icons/ (after a backup)."
                    # So I should probably modify the script to overwrite OR copy them later.
                    # Let's stick to the safe approach: Script writes to icons_normalized, then I will verify and copy.
                    
                    target_path = os.path.join(target_dir, filename)
                    with open(target_path, 'w', encoding='utf-8') as out:
                        out.write(new_svg)
                    print(f"Normalized {filename}: original size {image.size}, bbox {bbox}, viewBox {min_x} {min_y} {width} {height}")
                else:
                    print(f"Skipping {filename}: Empty image (no bbox).")
            except Exception as e:
                 print(f"Error processing {filename}: {e}")

        else:
            print(f"Skipping {filename}: No image data found.")

if __name__ == "__main__":
    normalize_icons()
