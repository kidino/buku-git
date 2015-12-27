#### Bahagian 2 - Bekerja dengan Server Repository (seperti Github, Gitlab, Bitbucket)

## Mempersiapkan Akaun dengan Kunci SSH

### Windows

#### OS X & Linux

> Cara menjana kunci SSH pada kedua-dua sistem pengoperasian adalah sama dengan terdapat sedikit perbezaan minor.

1. Jana Kunci SSH

Buka *Terminal* dan masukkan arahan berikut:

```sh
$ ssh-keygen -t rsa -b 4096 -C "emel.anda@domain.tld"
```

```
Enter file in which to save the key (Users/anda/.ssh/id_rsa)
```

Masukkan frasa laluan anda

```
Enter passphrase (empty for no passphrase): 
Enter same passphrase again:
```

```
Your identification has been saved in /Users/anda/.ssh/id_rsa
Your public key has been saved in /Users/anda/.ssh/id_rsa.pub
The key fingerprint is:
28:56:05:40:d6:ad:41:d7:72:f9:05:5a:0c:84:c0:86 emel.anda@domain.tld
The key's randomart image is:
+--[ RSA 2048]----+
|   .+*++o+o+o.   |
|   .E =o+ +o. .  |
|     ..o o.. .   |
|     ...    .    |
|    o . S        |
|   . .           |
|                 |
|                 |
|                 |
+-----------------+ 
```

2. Tambah kunci ke ssh-agent

```sh
$ eval "$(ssh-agent -s)"

```

```sh
$ ssh-add ~/.ssh/id_rsa
```
3. Salin kunci ke papan keratan *(clipboard)*

  * OS X
   
   Gunakan ```pbcopy```:

    ```sh
    $ pbcopy < ~/.ssh/id_rsa.pub 
    ```

  * Linux
   
   Gunakan ```xclip```. Pasang ke dalam sistem terlebih dahulu (sekiranya tiada) menggunakan pengurus pakej OS yang anda gunakan sama ada ```apt-get```, ```yum```, atau ```dnf```:

    ```sh
     $ sudo dnf install xclip
     $ xclip -sel clip < ~/.ssh/id_rsa.pub
    ```

3. Menambah Kunci ke GitHub

Log masuk ke github.com. Klik pada imej anda di sebelah kanan atas, dan pergi ke *Settings*. Seterusnya, pada menu sebelah kiri pergi ke *SSH Keys*. Tekan butang *Add SSH Key*.

Anda boleh menamakan kunci anda dengan sebarang nama yang berkaitan, seperti "Laptop Kerja" atau "Syarikat Sistem Sdn. Bhd.".
