#### Bahagian 1 - Bekerja Sendiri

## Memasang dan Mengenali Git

** Git Sebuah Alatan *Command Line* **

Apa yang anda perlu tahu, Git adalah sebuah alatan untuk kegunaan di *Command Line*, ataupun *Terminal*. Kalau dalam Windows mungkin kita panggil *Command Prompt*.

Ini adalah skrin hitam (atau hijau) yang mana kita perlu menaip setiap arahan. Terdapat aplikasi klien Git dengan antaramuka yang baik untuk kegunaan di Desktop. Namun untuk Buku Git ini, kita akan lebih mengkhususkan kepada penggunaan di *Command Line* agar anda lebih memahami konsep-konsep penting dalam Git.

![Image alt](images/git-init-2.png)

Sekiranya konsep-konsep penting ini telah dihadamkan, tidak kira apa aplikasi klien Git yang kita gunakan, kita pasti tahu apa yang perlu dilakukan.

** Memasang Git untuk Windows **

Pertama sekali, kita perlu memuat-turun aplikasi untuk memasang Git ke Windows. Dapatkan Git untuk dipasang ke komputer dari laman web berikut:

http://git-scm.com/download/win

** Memasang Git untuk Mac OS **

** Memasang Git untuk Linux **

Terdapat 2 cara untuk memasang Git di GNU/Linux: pengurus pakej dan kompil ***(compile)*** kod sumber.

#### Cara 1: Pengurus Pakej

Git biasanya boleh didapati di kebanyakan pengurus pakej ***(package manager)*** distro Linux. Berikut langkah untuk memasang Git di Fedora 23:

Pastikan anda mengemaskini sistem terlebih dahulu:

```sh
$ sudo dnf update
```

Seterusnya, jalankan arahan untuk memasang Git:

```sh
$ sudo dnf install git-all
```

Dengan itu Git telah dipasang ke dalam sistem. Untuk mengetahui versi yang dipasang, jalankan arahan berikut:

```sh
$ git --version
```

#### Cara 2: Kompil Kod Sumber
