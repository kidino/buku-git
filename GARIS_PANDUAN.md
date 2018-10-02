# Garis Panduan Penulisan

## Tipografi

Selain isi kandungan buku, tipografi juga penting dalam penulisan Buku Git, bagi memastikan Buku Git mudah dibaca dan tidak mengganggu perhatian pembaca. Terdapat beberapa elemen-elemen tipografi yang perlu diberi perhatian dalam penulisan Buku Git.

### Tajuk

Tujuan utama tajuk digunakan adalah untuk memberitahu pembaca tentang *struktur* mesej yang hendak disampaikan. Contoh penggunaan tajuk:

    # Pemasangan Git

    Sebelum kita memulakan pembelajaran tentang penggunaan Git, ...

    ## Linux

    Pemasangan Git bagi Linux berbeza-beza mengikut distro...

    ### Ubuntu

    `git` boleh dipasang menggunakan `apt-get`...

    ### CentOS

    `git` boleh dipasang menggunakan `yum`...

Cuba untuk tidak menggunakan lebih daripada 3 aras tajuk bagi tidak mengelirukan pembaca.

Selain itu, tajuk haruslah ringkas dan deskriptif. Jika didapati teks tajuk terlalu panjang, adalah lebih baik jika teks tersebut diletakkan di dalam perenggan. Sebagai contoh, ini tidak bagus:

> ### gitignore -- Memaklumkan pada Git Fail-fail yang perlu diabaikan
> Kadangkala, kita tidak mahu menyimpan sesetengah fail ke dalam Git...

manakala, ini lebih bagus:

> ### Pengabaian fail
> Kadangkala, kita tidak mahu menyimpan sesetengah fail ke dalam Git. Dengan menggunakan `.gitignore`, kita boleh memberitahu Git untuk mengabaikan fail-fail tertentu...

### Perenggan

Dalam Markdown, setiap baris teks yang biasa (tanpa apa-apa *format*) merupakan satu perenggan. Perenggan baru boleh dimulakan dengan memulakan teks di garis yang baru, dan dipisahkan dengan satu garis kosong. Contoh:

    Teks ini tergolong dalam perenggan pertama.

    Manakala teks ini tergolong dalam perenggan kedua.

Setiap perenggan seharusnya *fokus kepada satu mesej* yang ingin disampaikan. Jika suatu perenggan melibatkan banyak mesej, adalah lebih baik untuk memecahkan perenggan tersebut kepada beberapa perenggan yang lain.

Selain itu, perenggan juga boleh digunakan untuk *menarik perhatian* pembaca, dengan menggunakan ayat yang pendek dalam satu perenggan. Sebagai contoh (lihat perenggan kedua):

> Saya rasa kita semua pernah buat kerja sebegini. Dan kita juga mungkin pernah terus menyambung kerja tanpa menghiraukan tentang backup, sehinggalah kerja-kerja baru ini merosakkan keseluruhan projek. Dan kemudian kita baru tersedar yang kita tiada satu salinan projek dari versi 1 untuk memulakan semula kerja-kerja ke arah versi 2.

> Git ialah penyelesaian kepada semua masalah-masalah ini.

> Git akan menyimpan kesemua sejarah perubahan projek anda, jadi amat mudah jika anda ingin melihat kembali kepada code anda yang asal. Selain itu, ...

### Penekanan perkataan

Jika terdapat perkataan-perkataan yang perlu diambil perhatian oleh pembaca, gunakan *italic* ataupun **bold**:

    Perkataan *ini* menggunakan italic, manakala perkataan **ini** menggunakan bold.

> Perkataan *ini* menggunakan italic, manakala perkataan **ini** menggunakan bold.

Penggunaan diantara italic ataupun bold haruslah mengikut keadaan dan kesesuaian. Gunakan italic untuk penekanan ringan, manakala bold untuk penekanan berat. Sebagai contoh:

> `git rebase` akan *mengubah* commit anda. **Jangan** guna `git rebase` terhadap commit yang telah disimpan di dalam remote.

**Jangan** tekankan terlalu banyak perkataan, kerana jika terlalu banyak perkataan yang diberi penekanan, pembaca akan menjadi keliru, dan perkataan yang sepatutnya diberi perhatian akan *diabaikan* oleh pembaca.

### Penyertaan code

Jika perlu untuk menyertakan *code* di dalam teks, sila gunakan *backtick quote*. Sebagai contoh:

    Ini teks biasa. Dibawah merupakan code:

    ```
    printf("Hai!");
    ```

    Boleh juga menyertakan code dalam barisan seperti `<b>code</b>` ini.

> Ini teks biasa. Dibawah merupakan code:
>
> ```
> printf("Hai!");
> ```
>
> Boleh juga menyertakan code dalam barisan seperti `<b>code</b>` ini.

Tidak disyorkan untuk menggunakan *screenshot* untuk menyertakan code, kerana pembaca mungkin ingin *copy-paste* code tersebut, dan ini mejadi mustahil jika screenshot digunakan.
