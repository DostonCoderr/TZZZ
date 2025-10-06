-----------------------------------------------------------------------------------------------------Profil Sozlamalari Tizimi----------------------------------------------------------------------
Bu loyiha shaxsiy tizim (private system) uchun ishlab chiqilgan veb-ilova bo‘lib, foydalanuvchilarga kompaniya ma’lumotlarini kiritish, logotip yuklash va ma’lumotlarni boshqarish imkoniyatini beradi. Loyiha React va JSX yordamida yozilgan bo‘lib, stilizatsiya uchun CSS ishlatilgan.
Loyiha Haqida
Ushbu ilova foydalanuvchilarga quyidagi imkoniyatlarni taqdim etadi:

Kompaniya ma’lumotlarini (nomi, manzili, INN, virtual kassa raqami, Telegram chat ID va qo‘shimcha ma’lumotlar) kiritish va saqlash.
Kompaniya logotipini yuklash (SVG, PNG, JPG, GIF formatlarida, maksimal 5MB).
Barcha kiritilgan ma’lumotlarni yoki ombor ma’lumotlarini tozalash (o‘chirish) funksiyasi.
Input maydonlari uchun validatsiya va xato xabarlari (masalan, faqat raqamlar yoki harflar kiritish talabi).
Saqlash, tozalash va xatolik holatlari uchun toast xabarnomalari (saqlash uchun yashil, boshqa holatlar uchun ko‘k rangda).
Modal oynalar orqali saqlash tasdiqlari va tozalash tasdiqlari.
Yon panel (sidebar) orqali navigatsiya, faqat “Основные данные” bo‘limi faol.

Texnologiyalar

React: Foydalanuvchi interfeysi uchun JavaScript kutubxonasi.
JSX: Komponentlarni yozish uchun sintaksis.
CSS: Interfeysni stilizatsiya qilish uchun.
Modulli komponentlar: Kodni qayta ishlatish va boshqarish uchun alohida komponentlar (Header, Sidebar, FormInput, LogoUpload, ContentArea, Modal, ToastNotification, ActionButtonsFooter).

O‘rnatish
Loyihani o‘rnatish va ishga tushirish uchun quyidagi qadamlarni bajaring:

Repozitoriyani klonlash:
git clone <repo_url>
cd <repo_name>


Bog‘liqliklarni o‘rnatish:Loyiha React-ga asoslangan, shuning uchun npm yoki yarn orqali kerakli paketlarni o‘rnating:
npm install

yoki
yarn install


Loyihani ishga tushirish:Ishlab chiqish rejimida ilovani ishga tushirish uchun:
npm start

yoki
yarn start


Fayl tuzilmasi:


src/
  App.js
  App.css
  components/
    Header.js
    Sidebar.js
    FormInput.js
    LogoUpload.js
    ContentArea.js
    Modal.js
    ToastNotification.js
    ActionButtonsFooter.js
  icons/
    AlertIcon.js
    FileIcon.js


Rasm fayllari:Sidebar’da ishlatiladigan rasmlar (/images/file.png, /images/settings.png va hokazo) loyiha papkasida mavjud bo‘lishi kerak yoki public/images/ jildiga joylashtirilishi lozim. Agar rasmlar topilmasa, placeholder rasmlar ishlatiladi.


Funksiyalar

Rasm Yuklash: Foydalanuvchilar kompaniya logotipini SVG, PNG, JPG yoki GIF formatida yuklashlari mumkin (maksimal 5MB). Yuklash drag-and-drop yoki fayl tanlash orqali amalga oshiriladi.
Ma’lumotlarni Tozalash: “Oчистить все данные” va “Oчистить весь склад” tugmalari orqali ma’lumotlarni tozalash mumkin. Har bir tozalash amali tasdiqlash modali orqali amalga oshiriladi.
Input Validatsiyasi: 
inn va kassaNumber maydonlari faqat raqamlarni qabul qiladi.
Boshqa maydonlar (masalan, companyName, telegramInfo) faqat harflarni qabul qiladi (agar bo‘sh bo‘lmasa).
address va telegramChatId maydonlari maxsus validatsiyasiz matn qabul qiladi.
Bo‘sh maydonlar (telegramInfo’dan tashqari) uchun xato xabari ko‘rsatiladi.


Toast Xabarnomalari: 
Saqlash muvaffaqiyatli bo‘lsa, yashil fonda (“Ma'lumotlar muvaffaqiyatli saqlandi!”) xabar ko‘rsatiladi.
Xato yoki tozalash amallari uchun ko‘k fonda xabarlar ko‘rsatiladi.


Modal Oynalar: 
Saqlash tasdiqlash modali (yopish tugmasi bilan).
Tozalash tasdiqlash modali (Ha/Yo‘q tugmalari bilan).


Navigatsiya: Yon panel orqali turli bo‘limlarga o‘tish mumkin, ammo faqat “Основные данные” bo‘limi faol.

Foydalanish

Ma’lumotlarni kiritish: “Основные данные” bo‘limida kompaniya ma’lumotlarini kiriting.
Logotip yuklash: Logotipni yuklash uchun “Лого компании” maydoniga rasmni drag-and-drop qiling yoki faylni tanlang.
Saqlash: Ma’lumotlarni saqlash uchun “Сохранить” tugmasini bosing. Agar barcha maydonlar to‘g‘ri to‘ldirilgan bo‘lsa, yashil toast xabari ko‘rinadi.
Tozalash: Ma’lumotlarni yoki omborni tozalash uchun pastki qismdagi “Очистить все данные” yoki “Очистить весь склад” tugmalaridan foydalaning. Tasdiqlash modali paydo bo‘ladi.

Eslatmalar

Loyiha shaxsiy tizim uchun mo‘ljallangan, shuning uchun ommaviy foydalanishdan oldin xavfsizlik choralarini ko‘ring.
Agar rasm fayllari topilmasa, placeholder rasmlar ishlatiladi (https://placehold.co orqali).
CSS fayli (App.css) barcha stilizatsiyani o‘z ichiga oladi va alohida komponentlar uchun qo‘shimcha CSS fayllari talab qilinmaydi.

Muallif
Ushbu loyiha maxsus shaxsiy tizim uchun ishlab chiqilgan. Agar savollar yoki takliflar bo‘lsa, iltimos, repozitoriy orqali bog‘laning.
