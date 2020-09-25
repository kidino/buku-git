#### Bahagian 1 - Bekerja Sendiri

# Git Commit -- Menyimpan Kerja

Arahan <code>git commit</code> bertujuan menyimpan perubahan pada kod sumber di dalam repositori yang berada di dalam komputer anda. Semua perubahan ini boleh dilihat menggunakan arahan <code>git log</code>.

Arahan <code>git commit</code> perlu disertakan dengan mesej pada perubahan yang dilakukan, seperti dua contoh di bawah:

```
$ git commit -m "Penambahan kandungan untuk tajuk Git Commit"

$ git commit --message "Pembetulan pada modul pengguna"
```

Semua perubahan yang anda rekodkan menggunakan arahan <code>git commit</code> hanya berada di dalam komputer anda sahaja selagi anda belum menjalankan arahan <code>git push</code> untuk menghantarnya ke repositori utama.

## Mesej Commit

Setiap kali anda ingin commit perubahan yang anda lakukan, pastikan mesej yang anda isi berguna untuk rujukan anda dan juga rakan sekerja anda. Ini kerana ia dapat membantu anda mengenalpasti perubahan yang anda lakukan sekali imbas tanpa perlu melihat satu per satu perubahan yang anda lakukan.

### Contoh Yang Baik

Di bawah ini beberapa contoh yang baik yang digunakan di dalam commit message.

```
$ git commit -m "Membaiki layout pada registration form"

$ git commit -m "Tambah beberapa field pada borang pengesahan"

$ git commit -m "Pecahkan UserHelper kepada beberapa sub-class"
```

### Contoh Kurang Baik

Di bawah ini beberapa contoh yang kurang baik yang digunakan di dalam commit message.
```
$ git commit -m "Fix bug"

$ git commit -m "..."

$ git commit -m "Updates"
```

## Contoh Git Commit

Katakan anda sedang membangunkan satu sistem dan anda sedang buat perubahan pada beberapa fail. Sebelum arahan <code>git commit</code> boleh dilaksanakan, anda perlu menjalankan arahan <code>git add</code> terlebih dahulu.

```
$ git add --all

$ git commit -m "Tambah relationship antara model User dengan model Booking"

[master f9ae307] Tambah relationship antara model User dengan model Booking
 2 files changed, 2 insertions(+)
```

Setiap kali <code>git commit</code> dijalankan, maklumat berkenaan dengan fail-fail yang berubah akan dinyatakan kepada anda. 