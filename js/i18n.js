const translations = {
    en: {
        "title": "Mailer by Axioma",
        "lead": "Mailer by Axioma is a Telegram-based application that helps users automate email outreach by sending emails directly from their own Google accounts.",
        "app_desc": "The application is designed for individual users such as music producers, beatmakers, and other creators who need a simple way to manage and send email campaigns.",
        "auth_desc": "Mailer by Axioma uses Google OAuth 2.0 and the Gmail API. Emails are sent strictly on behalf of the authenticated user and only after explicit user authorization.",
        "key_features": "Key Features",
        "feature_1": "Send emails from your own Gmail account",
        "feature_2": "No access to incoming emails",
        "feature_3": "No reading or analysis of private messages",
        "feature_4": "Recipient lists are processed temporarily and never stored",
        "privacy_title": "Privacy",
        "privacy_text": "User privacy and data security are a top priority. For detailed information about how data is accessed, used, and protected, please review our Privacy Policy.",
        "privacy_link": "Privacy Policy",
        "contact_title": "Contact",
        "contact_text": "If you have any questions about the application or data usage, you can contact us at:",
        "footer_rights": "2026 Mailer by Axioma. All rights reserved.",

        "back_home": "Back to Home",
        "policy_title": "Privacy Policy",
        "last_updated": "Last updated: January 2026",
        "policy_intro": "This Privacy Policy describes how Mailer by Axioma (\"the Application\") accesses, uses, stores, and protects user data.",
        "section_1_title": "1. Application Overview",
        "section_1_text": "Mailer by Axioma is a Telegram-based email automation tool that allows users to send emails from their own Google accounts using the Gmail API.",
        "section_2_title": "2. Google User Data Accessed",
        "section_2_text": "The Application accesses the following Google user data via Google OAuth 2.0:",
        "gmail_api_desc": "Used solely to send emails on behalf of the authenticated user. The Application does not read, access, or analyze incoming emails, attachments, or mailbox contents.",
        "drive_api_desc": "Used only to access a spreadsheet file explicitly provided by the user, containing email recipient addresses for an email campaign. The Application does not access or analyze any other files on the user's Google Drive.",
        "section_3_title": "3. Data Provided Directly by the User",
        "user_id_text": "Telegram user ID and username",
        "campaign_content_text": "<strong>Email campaign content</strong> (subject and message body)",
        "recipient_list_text": "<strong>Email recipient list</strong> (provided via a Google Spreadsheet)",
        "section_4_title": "4. How Data Is Used",
        "section_4_intro": "User data is used exclusively to provide the core functionality of the Application, which is sending email campaigns on behalf of the user.",
        "use_1": "Email content is used to send messages via the Gmail API",
        "use_2": "Recipient lists are processed temporarily to complete a mailing campaign",
        "use_3": "Email campaign history (subject and message body) is stored to allow users to review previous campaigns",
        "section_5_title": "5. Data Storage and Security",
        "section_5_text": "OAuth access and refresh tokens are stored securely in an encrypted form using industry-standard encryption methods. Encryption keys are stored separately using environment variables.",
        "temp_processing_title": "Temporary Processing",
        "temp_processing_text": "Email recipient lists are downloaded temporarily to the server only for the duration of an active mailing process and are permanently deleted immediately after the campaign is completed.",
        "secure_storage_title": "Secure Storage",
        "secure_storage_text": "Email campaign history (email subject and message body) is stored in a secure database and remains stored until user data is removed.",
        "section_6_title": "6. Data Sharing",
        "section_6_text": "The Application does not sell, rent, or share Google user data with third parties. Data is used strictly to provide the Application's functionality.",
        "section_7_title": "7. Data Retention and Deletion",
        "section_7_text": "OAuth tokens remain stored until the user revokes access to the Application. Users can revoke access at any time through their Google Account permissions page:",
        "retention_note": "Once access is revoked, the stored OAuth tokens become invalid and can no longer be used to access Google services.",
        "section_8_title": "8. User Control",
        "section_8_text": "Users have full control over their Google account permissions and can revoke the Application's access at any time through Google Account settings.",
        "section_9_title": "9. Contact Information",
        "section_9_text": "If you have any questions about this Privacy Policy or data usage, please contact:",
        "app_name_label": "Application Name",
        "app_name_value": "Mailer by Axioma"
    },
    ru: {
        "title": "Mailer от Axioma",
        "lead": "Mailer от Axioma — это приложение на базе Telegram, которое помогает автоматизировать email-рассылки, отправляя письма напрямую с вашего Google-аккаунта.",
        "app_desc": "Приложение разработано для частных пользователей, таких как музыкальные продюсеры, битмейкеры и другие авторы, которым нужен простой способ создания и управления email-рассылками.",
        "auth_desc": "Mailer от Axioma использует Google OAuth 2.0 и Gmail API. Письма отправляются строго от имени авторизованного пользователя и только после его явного разрешения.",
        "key_features": "Ключевые особенности",
        "feature_1": "Отправка писем с вашего личного Gmail-аккаунта",
        "feature_2": "Нет доступа к входящим письмам",
        "feature_3": "Приватные сообщения не читаются и не анализируются",
        "feature_4": "Списки получателей обрабатываются временно и никогда не сохраняются",
        "privacy_title": "Конфиденциальность",
        "privacy_text": "Конфиденциальность пользователей и безопасность данных — наш приоритет. Для получения подробной информации о том, как мы получаем, используем и защищаем данные, ознакомьтесь с нашей Политикой конфиденциальности.",
        "privacy_link": "Политика конфиденциальности",
        "contact_title": "Контакты",
        "contact_text": "Если у вас возникли вопросы о приложении или использовании данных, вы можете связаться с нами:",
        "footer_rights": "2026 Mailer от Axioma. Все права защищены.",

        "back_home": "На главную",
        "policy_title": "Политика конфиденциальности",
        "last_updated": "Последнее обновление: Январь 2026",
        "policy_intro": "Настоящая Политика конфиденциальности описывает, как Mailer от Axioma («Приложение») получает доступ, использует, хранит и защищает данные пользователей.",
        "section_1_title": "1. Обзор приложения",
        "section_1_text": "Mailer от Axioma — это инструмент автоматизации электронной почты на базе Telegram, который позволяет пользователям отправлять письма со своих учетных записей Google, используя Gmail API.",
        "section_2_title": "2. Доступ к данным пользователя Google",
        "section_2_text": "Приложение получает доступ к следующим данным пользователя Google через Google OAuth 2.0:",
        "gmail_api_desc": "Используется исключительно для отправки писем от имени авторизованного пользователя. Приложение не читает, не получает доступ и не анализирует входящие письма, вложения или содержимое почтового ящика.",
        "drive_api_desc": "Используется только для доступа к таблице, явно предоставленной пользователем, которая содержит адреса получателей для email-рассылки. Приложение не получает доступ и не анализирует другие файлы на Google Диске пользователя.",
        "section_3_title": "3. Данные, предоставляемые пользователем напрямую",
        "user_id_text": "Telegram user ID и имя пользователя",
        "campaign_content_text": "<strong>Содержание email-рассылки</strong> (тема и текст сообщения)",
        "recipient_list_text": "<strong>Список получателей</strong> (предоставляется через Google Таблицу)",
        "section_4_title": "4. Как используются данные",
        "section_4_intro": "Данные пользователя используются исключительно для обеспечения основной функциональности Приложения — отправки email-рассылок от имени пользователя.",
        "use_1": "Содержимое писем используется для отправки сообщений через Gmail API",
        "use_2": "Списки получателей обрабатываются временно для завершения рассылки",
        "use_3": "История рассылок (тема и текст) сохраняется, чтобы пользователи могли просматривать свои предыдущие кампании",
        "section_5_title": "5. Хранение и безопасность данных",
        "section_5_text": "Токены доступа и обновления OAuth хранятся в зашифрованном виде с использованием стандартных методов шифрования. Ключи шифрования хранятся отдельно в переменных окружения.",
        "temp_processing_title": "Временная обработка",
        "temp_processing_text": "Списки получателей загружаются на сервер временно только на период активной рассылки и безвозвратно удаляются сразу после завершения кампании.",
        "secure_storage_title": "Безопасное хранение",
        "secure_storage_text": "История рассылок (тема и текст письма) хранится в защищенной базе данных и остается там до тех пор, пока данные пользователя не будут удалены.",
        "section_6_title": "6. Передача данных",
        "section_6_text": "Приложение не продает, не сдает в аренду и не передает данные пользователей Google третьим лицам. Данные используются строго для обеспечения функциональности Приложения.",
        "section_7_title": "7. Хранение и удаление данных",
        "section_7_text": "OAuth-токены хранятся до тех пор, пока пользователь не отзовет доступ к Приложению. Пользователи могут отозвать доступ в любое время на странице разрешений Google Аккаунта:",
        "retention_note": "Как только доступ отозван, сохраненные OAuth-токены становятся недействительными и больше не могут использоваться для доступа к сервисам Google.",
        "section_8_title": "8. Контроль пользователя",
        "section_8_text": "Пользователи имеют полный контроль над разрешениями своего аккаунта Google и могут отозвать доступ Приложения в любое время через настройки Google Аккаунта.",
        "section_9_title": "9. Контактная информация",
        "section_9_text": "Если у вас есть вопросы по поводу этой Политики конфиденциальности или использования данных, пожалуйста, свяжитесь с нами:",
        "app_name_label": "Название приложения",
        "app_name_value": "Mailer от Axioma"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Inject Styles for Switcher
    const style = document.createElement('style');
    style.textContent = `
        .language-switcher {
            position: absolute;
            top: 2rem;
            right: 2rem;
            z-index: 1000;
            cursor: pointer;
            font-family: var(--font-primary, sans-serif);
            font-weight: 700;
            font-size: 1rem;
            color: var(--color-primary, #000);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            user-select: none;
            padding: 0.5rem;
            transition: opacity 0.2s;
        }
        .language-switcher:hover {
            opacity: 0.7;
        }
        
        /* Mobile adjustment */
        @media (max-width: 768px) {
            .language-switcher {
                top: 1.5rem;
                right: 1.5rem;
            }
        }
    `;
    document.head.appendChild(style);

    let currentLang;

    // Helper to set lang
    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;

        // Update Text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update Switcher Text
        const switcher = document.querySelector('.language-switcher');
        if (switcher) {
            switcher.textContent = lang === 'en' ? 'ENG' : 'RUS';
        }
    };

    // Create and Insert Switcher
    const createAndInsertSwitcher = () => {
        const btn = document.createElement('div');
        btn.className = 'language-switcher';
        btn.textContent = currentLang === 'en' ? 'ENG' : 'RUS';
        btn.onclick = (e) => {
            e.stopPropagation();
            const newLang = currentLang === 'en' ? 'ru' : 'en';
            setLanguage(newLang);
        };
        document.body.appendChild(btn);
    };

    // Init: Use the language set by init.js or default to 'en'
    currentLang = document.documentElement.lang || 'en';

    // Ensure switcher and texts are correct
    createAndInsertSwitcher();
    setLanguage(currentLang);

    // Remove loading state once translations are applied
    document.documentElement.classList.remove('lang-loading');
});
