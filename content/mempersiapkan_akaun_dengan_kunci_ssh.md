#### Bahagian 2 - Bekerja dengan Server Repository (seperti Github, Gitlab, Bitbucket)

## Mempersiapkan Akaun dengan Kunci SSH

### Windows

### OS X & Linux

> Cara menjana kunci SSH pada kedua-dua sistem pengoperasian adalah sama dengan terdapat sedikit perbezaan kecil.

1. Jana Kunci SSH

   Buka *Terminal* dan masukkan arahan berikut:

   ```sh
   $ ssh-keygen -t rsa -b 4096 -C "emel.anda@domain.tld"
   ```

   Seterusnya, tentukan di mana kunci akan disimpan. Sebaiknya kekalkan pada lokasi yang telah dipilih oleh sistem.
   
   ```
   Enter file in which to save the key (Users/anda/.ssh/id_rsa): [_tekan_Enter_]
   ```

   Rekakan frasa laluan anda.

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

   Kini kunci telah tersedia. Terdapat 2 fail di dalam direktori .ssh/ iaitu 'id_rsa' dan 'id_rsa.pub'.
   
2. Tambah kunci ke ```ssh-agent```
   
   Pastikan ```ssh-agent``` berjalan di latar belakang.
   
   ```sh
   $ eval "$(ssh-agent -s)"

   ```
   
   ```sh
   $ ssh-add ~/.ssh/id_rsa
   ```

3. Salin kunci awam 'id_rsa.pub' ke papan keratan *(clipboard)*

  * **OS X**: Gunakan ```pbcopy```:

    ```sh
    $ pbcopy < ~/.ssh/id_rsa.pub 
    ```

  * **Linux**: Gunakan ```xclip```. Pasang ke dalam sistem terlebih dahulu (sekiranya tiada) menggunakan pengurus pakej distro yang anda gunakan sama ada ```apt-get```, ```yum```, atau ```dnf```:

    ```sh
     $ sudo dnf install xclip
     $ xclip -sel clip < ~/.ssh/id_rsa.pub
    ```

4. Menambah Kunci ke GitHub

   Log masuk ke github.com. Klik pada imej anda di sebelah kanan atas, dan pergi ke *Settings*. Seterusnya, pada menu sebelah kiri pergi ke *SSH Keys*. Tekan butang *Add SSH Key*.

   Anda boleh menamakan kunci anda dengan sebarang nama yang berkaitan, seperti "Laptop Kerja" atau "Syarikat Sistem Sdn. Bhd.". Sebuah emel akan dihantar ke alamat emel anda sebagai pengesahan penambahan kunci SSH.

5. Memastikan Semua Berjalan Lancar

   Setelah melakukan langkah-langkah menjana kunci dan menyalin kunci awam ke GitHub, kini masa untuk cuba membuat sambungan SSH kali pertama.

   Masih di *Terminal*, jalankan arahan berikut:

   ```sh
   $ ssh -T git@github.com
   ``` 

   ```sh
   The authenticity of host 'github.com (192.30.252.131)' can't be established.
   RSA key fingerprint is 28:56:05:40:d6:ad:41:d7:72:f9:05:5a:0c:84:c0:86.
   Are you sure you want to continue connecting (yes/no)?
   ```
   
   Pastikan cap jari sepadan seperti yang diberikan semasa menjana kunci. taip ```yes``` kemudian tekan Enter.
   
   
   ```sh
   Warning: Permanently added 'github.com,192.30.252.131' (RSA) to the list of known hosts.
   Hi namapenggunaanda! You've successfully authenticated, but GitHub does not provide shell access.
   ```
   
   Jika anda dapat melihat mesej seperti di atas, tahniah! Anda baru sahaja melakukan sambungan SSH ke GitHub dan secara tidak langsung konfigurasi kunci anda berjaya.
