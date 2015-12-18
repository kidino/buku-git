#### Bahagian 1 - Bekerja Sendiri

## Git Checkout -- Melihat Kerja-kerja Lampau

`git checkout` membolehkan pengguna melihat `branch` yang telah dibuat oleh pengguna. Dengan menaip `git checkout`, akan mengemaskini fail yang terdapat dalam `working directory`.

#### Penggunaan `git checkout`

```bash
$ git checkout my-branch
```

Pengguna hanya boleh `checkout` branch yang telah dibuat oleh pengguna dengan `git branch`. Setelah menaipkan `command` tadi, `working directory` akan dikemaskini dengan branch `my-branch`.

```bash
$ git checkout -b branch-baru
```

Dengan menambah opsyen `-b`, ini akan memberitahu `git` untuk menjalankan `git branch branch-baru` sebelum menjalankan `git checkout branch-baru`.

```bash
$ git checkout -b branch-baru branch-lama
```

Sama seperti sebelum ini, cuma kali ini, `git` akan membuat `branch-baru` dari `branch-lama`.
