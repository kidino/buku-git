#### Bahagian 1 - Bekerja Sendiri

# Memasang dan Mengenali Git

## Git Sebuah Alatan *Command Line*

Apa yang anda perlu tahu, Git adalah sebuah alatan untuk kegunaan di *Command Line*, ataupun *Terminal*. Kalau dalam Windows mungkin kita panggil *Command Prompt*. Selain itu, Git juga boleh digunakan melalui *Graphical User Interface*. Namun untuk Buku Git ini, kita akan lebih mengkhususkan kepada penggunaan di *Command Line* agar anda lebih memahami konsep-konsep penting dalam Git.

Sekiranya konsep-konsep penting ini telah dihadamkan, tidak kira apa aplikasi klien Git yang kita gunakan, kita pasti tahu apa yang perlu dilakukan.

## Memasang Git untuk Windows

1. Muat turun pemasang Git untuk Windows dari laman web Git: http://git-scm.com/download/win
2. Jalankan pemasang Git tersebut, dan klik *Next* sehingga pemasangan Git tamat.
3. Terminal Git boleh diakses dengan menjalankan aplikasi *Git Bash*:

    ![Image alt](images/git-bash-icon.png)

4. Jalankan arahan `git --version` untuk mencuba Git. Anda akan dapat melihat version Git yang telah dipasang:

    ```sh
    $ git --version
    git version 2.6.4.windows.1
    ```

## Memasang Git untuk Mac OS X

Terdapat dua cara mudah untuk memasang Git untuk Mac OS X: menggunakan `brew` (http://brew.sh) atau `xcode-select`.

### Cara 1: Menggunakan `brew`

1. Pasang `brew` terlebih dahulu:

    ```sh
    $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```

2. Kemudian pasang `git`:

    ```sh
    $ brew install git
    ```

> `brew` merupakan alatan yang seringkali diguna pakai untuk memasang alatan dan perisian untuk OS X.

### Cara 2: Menggunakan `xcode-select`

Ini merupakan cara yang lebih rasmi untuk memasang `git` untuk Mac OS X:

```sh
$ xcode-select --install
```

> Command di atas bukan sahaja memasang `git`, malah memasang alatan-alatan lain seperti `gcc` dan `clang`.

### Memasang Git untuk Linux

### Cara 1: Menggunakan `apt-get`

1. Kemaskini pakej `apt` terlebih dahulu:

    ```sh
    $ sudo apt-get update
    ```

2. Kemudian pasang `git`:

    ```sh
    $ sudo apt-get install git-all
    ```
    
> `apt` merupakan alatan bagi menguruskan pakej pada OS Linux yang berasaskan debian seperti Ubuntu dan LinuxMint.

### Cara 2: Menggunakan `yum`

1. Kemaskini pakej `yum` terlebih dahulu:

    ```sh
    $ sudo yum update
    ```

2. Kemudian pasang `git`:

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

```sh
$ sudo yum install git-all
```
`yum` merupakan alatan bagi menguruskan pakej rpm pada OS Linux yang berasaskan redhat seperti Fedora dan CentOS.

