import os
import re
import glob

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
            
            # Construct new SVG
            # We assume 1024x1024 based on our analysis
            new_svg = (
                f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" '
                f'width="100%" height="100%" viewBox="0 0 1024 1024" preserveAspectRatio="xMidYMid meet">'
                f'<image width="1024" height="1024" x="0" y="0" href="{base64_data}"/>'
                f'</svg>'
            )
            
            target_path = os.path.join(target_dir, filename)
            with open(target_path, 'w', encoding='utf-8') as out:
                out.write(new_svg)
            print(f"Normalized {filename}")
        else:
            print(f"Skipping {filename}: No image data found.")

if __name__ == "__main__":
    normalize_icons()
