#### Bahagian 1 - Bekerja Sendiri

# Git Add -- Memilih Fail-fail yang ingin disimpan

> Membina web, kita memulakan dengan membina sebuah fail ```index.html```. Maka itulah yang Johan lakukan.

* Bina sebuah fail ```index.html``` menggunakan editor pilihan.
* Taipkan kandungan HTML seperti berikut.

```
<html>
    <head>
        <title>Belajar Git</title>
    </head>
    <body>
        <h1>Belajar Git</h1>
    </body>
</html>
```

* Simpan fail ini
* Pergi semula ke folder, lakukan _right-click_ and pilih Git Bash seperti sebelum ini.
* Di dalam Git Bash, taipkan arahan ```git status```.

```
$ git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        index.html

nothing added to commit but untracked files present (use "git add" to track)
```

Perhatikan di sini, Git sudah mengenalpasti satu fail, ```index.html``` yang kini belum di_track_.

Selepas ini, kita akan ```commit```, dan perubahan ini akan direkodkan. Tetapi sebelum itu, kita perlu maklum kepada Git perubahan apa yang kita mahu rekodkan. Jadi di sini kita gunakan ```git add``` sebagai satu proses sebelum kita ```commit```.

Kita boleh rekodkan perubahan mengikut fail-fail yang kita mahu. 

```
$ git add index.html
```

Bila kita buat begini, hanya fail ini yang akan direkodkan oleh Git apabila kita ```commit``` kelak. Apabila kita buat ```git status``` tadi, kita boleh lihat fail-fail yang mana kita mahu rekodkan perubahan. Bagi fail yang kita tak mahu rekodkan dalam ```commit``` kita tak perlu masukkan dalam ```git add```.

Untuk memasukkan semua fail, kita boleh juga lakukan arahan sebegini.

```
$ git add .
```

Selepas melakukan ```git add```, kita boleh lakukan semula ```git status```.

```
$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   index.html
```
