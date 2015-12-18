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

** Memasang Git untuk Mac OS X **

Terdapat dua cara mudah untuk memasang Git untuk Mac OS X: menggunakan `brew` (http://brew.sh) atau `xcode-select`.

#### Cara 1: Menggunakan `brew`

1. Pasang `brew` terlebih dahulu:

    ```sh
    $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```

2. Kemudian pasang `git`:

    ```sh
    $ brew install git
    ```

> `brew` merupakan alatan yang seringkali diguna pakai untuk memasang alatan dan perisian untuk OS X.

#### Cara 2: Menggunakan `xcode-select`

Ini merupakan cara yang lebih rasmi untuk memasang `git` untuk Mac OS X:

```sh
$ xcode-select --install
```

> Command di atas bukan sahaja memasang `git`, malah memasang alatan-alatan lain seperti `gcc` dan `clang`.

** Memasang Git untuk Linux **

