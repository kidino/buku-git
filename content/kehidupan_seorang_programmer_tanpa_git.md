#### Bahagian 1 - Bekerja Sendiri

# Kehidupan Seorang Programmer Tanpa Git

Sebelum kita terus kepada Git, saya rasa anda akan lebih faham kegunaan Git apabila kita mengimbau kembali apa yang kita biasa buat untuk menyimpan hasil-hasil kerja kita dalam pembangunan.

Untuk lebih memahami, kita akan melihat kepada apa yang dihadapi oleh **Johan** dalam membuat kerja-kerja programming.

** Memulakan Projek Baru **

> Johan adalah seorang graduan yang baru menamatkan pengajian. Dia baru memulakan kerja Syarikat Sistem Sdn. Bhd. Untuk memulakan projek baru, Johan biasanya akan membina satu folder baru di dalam komputer. Mari kita namakan folder ini *PROJEK-A*.

** Menyalin Folder Baru **

> Apabila telah siap versi 1.0, dan Johan perlu menyambungkan kerja-kerja untuk menyiapkan versi 2.0, dia akan menyalin keseluruhan folder *PROJEK-A* kepada *PROJEK-A-2*.

Saya rasa kita semua pernah buat kerja sebegini. Dan kita juga mungkin pernah terus menyambung kerja tanpa menghiraukan tentang *backup*, sehinggalah kerja-kerja baru ini merosakkan keseluruhan projek. Dan kemudian kita baru tersedar yang kita tiada satu salinan projek dari versi 1 untuk memulakan semula kerja-kerja ke arah versi 2.

Maka terpaksalah kita membuat segalanya dari awal semula.

** Menyalin Fail Baru **

> Ada ketika yang lain, Johan hanya mau mengubah fail `index.html` untuk mengubah rupabentuk laman utama. Agar terdapat satu backup yang boleh digunakan sekiranya ubahsuai baru merosakkan, maka Johan pun menyalin `index.html` ke `index-backup.html`.

Kadang-kala walaupun kita sudah berhati-hati, kita buat silap juga. Yang kita sangkakan kita ada `index-backup.html`, tetapi fail itulah sebenarnya yang telah kita ubah.

** Ahli Pasukan -- Jangan Usik Fail Saya **

> Semasa di universiti, apabila terdapat kerja berpasukan, pastinya Johan menetapkan modul-modul yang akan dibangunkan oleh ahli pasukan. Dan Johan juga dengan garang telah menyatakan agar ahli pasukan jangan mengusik fail-fail yang bukan milik mereka. Apabila ingin menggabungkan hasil kerja, Johanlah yang paling tertekan kerana perlu banyak memperbetulkan source code kawan-kawan. Selain itu Johan juga perlu memastikan sistem berjalan lancar setelah kerja-kerja digabungkan.

Kalau hendak dipendekkan, mungkin boleh saya katakan bahawa ada cara yang lebih baik -- iaitu menggunakan Git. Kelak kita akan tunjukkan bagaimana Git membantu mengatasi masalah-masalah ini.
