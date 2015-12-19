#### Bahagian 1 - Bekerja Sendiri

## Git Status -- Mengetahui situasi semasa dan langkah seterusnya

Setelah memastikan projek kita kini sudah menggunakan Git untuk mengenalpasti sebarang perubahan dalam kod, langkah seterusnya adalah untuk memastikan status terkini projek kita.

Sebarang perubahan yang kita lakukan pada fail-fail didalam projek ini (jika ada), akan dipaparkan menggunakan arahan ini.

Untuk melihat situasi Git bagi project kita, kita menggunakan arahan ```git status```.

1. Masuk ke dalam folder `PROJEK-GIT` dan masukkan arahan `git init`:

	```sh
	$ cd PROJEK-GIT
	$ git status
	```

Jika tiada perubahan yang dilakukan atau tiada lagi fail yg dimasukkan ke dalam projek ini, skrin dibawah akan dipaparkan:

![Image alt](images/git-status-no-changes.png)

Jika anda telah menambah file (menggunakan arahan ```git add``` dan sebagainya) dan terdapat perubahan, skrin seperti dibawah akan dipaparkan:

![Image alt](images/git-status-with-changes.png)