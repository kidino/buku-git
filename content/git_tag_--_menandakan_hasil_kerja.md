#### Bahagian 1 - Bekerja Sendiri

# Git Tag -- Menandakan Hasil Kerja

Menggunakan ```git checkout``` atau apa-apa arahan lain untuk merujuk semula ke titik kerja yang lalu agak rumit kita kita bergantung kepada commit ID. Jadi, kita boleh penandakan sesuatu commit dengan ```tag```. Bila kita dah banyak membuat penambahan/perbaharuan dalam perisian yang dibangunkan, kita boleh menandakan titik perlepasan (`release point`).

Untuk menyenarai `tag`, kita boleh menggunakan command `git tag`, seperti berikut:

```bash
$ git tag
v0.5
v1.0
```

Sekiranya kita, tidak pernah membuat `tag`, tidak ada sebarang `tag` akan dipaparkan.

Untuk melihat terperinci tentang `tag` yang dibuat, boleh taip:

```bash
$ git show v1.1-beta
commit ca82a6dff817ec66f44342007202690a93763949
Author: Nurulazrad Murad <nurulazradm@herbalife.com>
Date:   Mon Dec 18 21:52:11 2008 +0800

  changed the version number
```

### Membuat `tag` Baru

Anda juga boleh membuat `tag` untuk kerja-kerja yang lepas, contohnya ada mempunyai `commit` seperti dibawah (`git log` menyenaraikan commit):

```bash
$ git log --pretty=oneline

commit c7e170a4b3f820e91674696c55d146d443a5f023
Author: Iszuddin Ismail <dino@websegera.my>
Date:   Sat Dec 19 07:07:51 2015 +0800

    minor standardization

    Signed-off-by: Iszuddin Ismail <dino@websegera.my>

commit d7f356330b00414da298959c0ddf54fcc7e0b370
Merge: 7167656 ae98e57
Author: Iszuddin Ismail <dino@websegera.my>
Date:   Sat Dec 19 06:50:03 2015 +0800

    Merge pull request #6 from hasyimibhar/pasang-osx

    Tambah maklumat tentang pemasangan git untuk Mac OS X
```

Katakan, kita hendak menandakan `v0.6` dalam projek kita pada `commit c7e170a4` _(hanya gunakan 8 aksara pertama dari commit ID)_.

```bash
$ git tag -a v0.6 commit c7e170a4
```

Dan untuk melihat, taip `git show v0.6`

```bash
commit c7e170a4b3f820e91674696c55d146d443a5f023
Author: Iszuddin Ismail <dino@websegera.my>
Date:   Sat Dec 19 07:07:51 2015 +0800

    minor standardization

    Signed-off-by: Iszuddin Ismail <dino@websegera.my>
```

Untuk memastikan lagi, kita boleh guna semula arahan `git tag`.

```bash
$ git tag
v0.5
v0.6
v1.0
```

### Checkout Tag

Untuk berkerja pada `tag` yang tertentu, sila taip:

```bash
$ git checkout -b version1 v1.0
Switched to a new branch 'version1'
```

Di sini, kita mengambil kerja-kerja dari tag `v1.0` dan disalinkan ke _branch_ baru, *version1*. Kita akan bincangkan tentang *Branching* dengan lebih lanjut di bab yang lain.
