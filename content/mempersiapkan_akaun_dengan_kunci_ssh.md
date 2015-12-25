#### Bahagian 2 - Bekerja dengan Server Repository (seperti Github, Gitlab, Bitbucket)

## Mempersiapkan Akaun dengan Kunci SSH

####Linux

1. Jana Kunci SSH

Buka *Terminal* dan masukkan arahan berikut:

```sh
$ ssh-keygen -t rsa -b 4096 -C "emel.anda@domain.tld"
```

```sh
Enter file in which to save the key (Users/anda/.ssh/id_rsa)
```

Masukkan frasa laluan anda

```sh
Enter passphrase (empty for no passphrase): 
Enter same passphrase again:
```


```sh
Your identification has been saved in /Users/anda/.ssh/id_rsa
Your public key has been saved in /Users/anda/.ssh/id_rsa.pub
The key fingerprint is:
 emel.anda@domain.tld
```

2. Tambah Kunci ke ssh-agent

```sh
$ eval "$(ssh-agent -s)"

```

```sh
$ ssh-add ~/.ssh/id_rsa
```

3. Menambah Kunci ke GitHub

Log masuk ke github.com. Klik pada imej anda di sebelah kanan atas, dan pergi ke *Settings*. Seterusnya, pada menu sebelah kiri pergi ke *SSH Keys*. Tekan butang *Add SSH Key*.

Anda boleh menamakan kunci anda dengan sebarang nama yang berkaitan, seperti "Laptop Kerja" atau " Sdn. Bhd.". 




