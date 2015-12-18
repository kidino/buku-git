#### Bahagian 1 - Bekerja Sendiri

## Git Tag -- Menandakan Hasil Kerja

Bila kita dah banyak membuat penambahan/perbaharuan dalam perisian yang dibangunkan, kita perlu menandakan titik perlepasan (`release point`).

Untuk menyenarai `tag`, kita boleh menggunakan command `git tag`, seperti berikut:

```bash
$ git tag
v0.5
v1.0
```

Sekiranya kita, tidak pernah membuat `tag`, tidak ada sebarang `tag` akan dipaparkan.

#### Membuat `tag`

```bash
$ git tag v1.1-beta
$ git tag
v0.5
v1.0
v1.1-beta
```

Untuk melihat terperinci tentang `tag` yang dibuat, boleh taip:

```bash
$ git show v1.1-beta
commit ca82a6dff817ec66f44342007202690a93763949
Author: Nurulazrad Murad <nurulazradm@herbalife.com>
Date:   Mon Dec 18 21:52:11 2008 +0800

  changed the version number
```

#### Membuat `tag` kemudian

Anda juga boleh membuat `tag` untuk kerja-kerja yang lepas, contohnya ada mempunyai `commit` seperti dibawah:

```bash
Wed Dec 16 11:49:53 2015 +0800 d2a5622 material-sorting  [Nurulazrad M]
Mon Dec 14 17:24:13 2015 +0800 b2b550f fix-i18n-materials  [Nurulazrad M]
Wed Dec 16 10:15:54 2015 +0800 5c72690 fix-article-naming  [Nurulazrad M]
Mon Dec 14 14:25:16 2015 +0800 d5fe731 new-material-indicator  [Nurulazrad M]
```

Katakan, kita hendak menandakan `fix` dalam perisian kita, contoh pada `commit b2b550f fix-i18n-materials`

```bash
$ git tag -a v0.6 b2b550f
```

Dan untuk melihat, taip `git show v0.6`

```bash
commit b2b550fd003fe3a1f7357d2e303088ef6c8d2085
Author: Nurulazrad Murad <nurulazradm@herbalife.com>
Date:   Mon Dec 14 17:24:13 2015 +0800

  fix i18n materials
```

#### Kongsi `tag`

Untuk membolehkan pengguna lain melihat `tag` yang telah dibuat, pengguna perlu menaip `git push origin v0.6`

```bash
Counting objects: 14, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (12/12), done.
Writing objects: 100% (14/14), 2.05 KiB | 0 bytes/s, done.
Total 14 (delta 3), reused 0 (delta 0)
To git@github.com:nurulazradm/buku-git.git
* [new tag] v0.6 -> v0.6
```

Atau untuk mengongsi kesemua `tag` yang telah dibuat, sila taip `git push origin --tags`

```bash
Counting objects: 14, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (12/12), done.
Writing objects: 100% (14/14), 2.05 KiB | 0 bytes/s, done.
Total 14 (delta 4), reused 0 (delta 0)
To git@github.com:nurulazradm/buku-git.git
* [new tag] v0.7 -> v0.7
* [new tag] v1.0 -> v1.0
```


#### `Checkout Tag`

Untuk berkerja pada `tag` yang tertentu, sila taip:

```bash
$ git checkout -b version1 v1.0
Switched to a new branch 'version1'
```
