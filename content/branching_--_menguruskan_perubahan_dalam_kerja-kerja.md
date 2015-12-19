#### Bahagian 1 - Bekerja Sendiri

## Branching -- Menguruskan Perubahan dalam Kerja-kerja

#### Kenapa Perlu `Branching`?

Tujuan `branching` adalah untuk membolehkan pengguna mencuba idea-idea baru ke atas perisian yang dibangunkan. Sekiranya percubaan menambah atau membaikpulih itu berjaya, maka pengguna boleh `merge` atau `rebase` kepada branch `master`.

#### Asas `Branching`

Katakan pengguna ingin membuat `feature` baru bagi perisian yang sedia ada. Pengguna boleh menggunakan menaip:

```bash
$ git checkout -b feature-html5
Switched to a new branch 'feature-html5'
```

Ini sebenarnya adalah `shortcut` untuk

```bash
$ git branch feature-html5
$ git checkout feature-html5
```

#### Tambah `content` Baru

```bash
$ vim index.html
$ git add index.html
$ git commit -m "Tukar html4 kepada html5"
[feature-html5-css3 1qwe345] Tukar html4 kepada html5
  1 files changed, 1 deletion (-)
```

#### Cantum `content` Baru

```bash
$ git checkout master
$ git merge feature-html5
```

Pastikan ada berada dalam branch `master` sebelum membuat `merge` dengan branch `feature-html5`

Sekiranya branch `feature-html5` sudah tidak diperlukan, boleh dibuang menggunakan `command` berikut:

```bash
$ git checkout master
$ git branch -d feature-html5
```
