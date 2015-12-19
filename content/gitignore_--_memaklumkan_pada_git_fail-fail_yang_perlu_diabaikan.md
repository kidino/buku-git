#### Bahagian 1 - Bekerja Sendiri

## gitignore -- Memaklumkan pada Git Fail-fail yang perlu diabaikan

Kadangkala kita perlu mengabaikan fail ataupun direktori, contohnya fail sementara ataupun konfigurasi yang dijana oleh program penyunting teks ataupun Persekitaran Pembangunan (IDE). Ini adalah kerana bukan semua orang menggunakan program yang sama untuk menulis kod.

Fail-fail `gitignore`:

1. $HOME/.config/git/ignore
1. $GIT_DIR/info/exclude
1. .gitignore

Setiap baris di dalam fail `gitignore` adalah corak yang akan dipadankan oleh Git untuk tujuan pengabaian. Git lazimya memeriksa corak daripada beberapa sumber, mengikut turutan yang paling penting dahulu:

1. Corak daripada garis perintah (contohnya daripada `git ls-files` and `git read-tree`)

1. Corak daripada fail `.gitignore` di dalam direktori semasa ataupun direktori di atasnya

1. Corak daripada fail `$GIT_DIR/info/exclude`. `$GIT_DIR` di sini adalah direktori `.git` di direktori paling atas untuk projek semasa

1. Corak daripada fail yang ditunjukkan oleh pembolehubah `core.excludesFile` di dalam fail konfigurasi pengguna `~/.gitconfig`

Setiap fail `gitignore` mempunyai tujuan mereka sendiri:

* Corak yang sepatutnya disimpan ke dalam *version control* bagi membolehkan semua orang menggunakannya, haruslah dimasukkan ke dalam `.gitignore`. Ini bermaksud fail `.gitignore` disimpan seperti fail biasa di dalam projek. Corak di dalamnya hanya akan berkesan untuk direktori di mana ia berada dan direktori yang lebih dalam

* Corak yang khas kepada sesuatu projek tetapi tidak perlu dikongsikan dengan projek lain tetapi hanya digunakan oleh seseorang, haruslah dimasukkan ke dalam `$GIT_DIR/info/exclude`

* Corak yang seseorang mahukan untuk diabaikan secara keseluruhan di dalam sistem beliau, boleh dimasukkan ke dalam fail yang ditunjukkan oleh pembolehubah `core.excludesFile` di dalam fail `~/.gitconfig`.

Nota: Sekiranya `core.excludesFile` tidak diset, fail lalai adalah `$XDG_CONFIG_HOME/git/ignore`. Sekiranya `$XDG_CONFIG_HOME` tidak diset, fail lalai adalah `$HOME/.config/git/ignore`

#### Format Corak

* Baris kosong - tidak dipadankan dan hanya digunakan untuk mengasingkan barisan-barisan lain (untuk memudahkan pembacaan dan pengasingan)

* Baris bermula dengan # adalah barisan komen. Bagi mengabaikan nama fail atau direktori yang bermula dengan #, kita perlu masukkan `\` sebelum # yang pertama. Contohnya "`\#namafail#.txt`"

* Ruang kosong di dalam barisan akan diabaikan kecuali dimasukkan `\` sebelumnya. Contohnya "`Nama\ Fail.xls`"

* Awalan "`!`" digunakan bagi membatalkan pengabaian yang terlah dilakukan sebelumnya. Contohnya sekiranya anda mempunyai fail1.bak sehingga fail10.bak anda boleh mengabaikan semua fail **kecuali** fail5.bak dengan 2 barisan berikut:
```
fail*.bak
!fail5.bak
```
Sama seperti kes #, jika anda mempunyai fail yang bermula dengan ! anda boleh menggunakan `\` di hadapan. Contohnya "`!myfile.txt`"

* Sekiranya barisan berakhir dengan `/` Git hanya akan memadankan corak untuk direktori tetapi bukan untuk fail. Contohnya "`mygit/`" hanya akan dipadankan dengan direktori `mygit` tetapi bukan fail bernama `mygit`.

* *wildcard* di dalam corak tidak akan dipadankan dengan `/` di dalam direktori. Contohnya "`mygit/*.c`" akan dipadankan dengan `mygit/prog.c` tetapi tidak dengan `mygit/tools/tool1.c`

* Awalan *slash* `/` akan dipadankan dengan direktori semasa. Contohnya "`/*.cpp`" akan dipadankan dengan `prog.cpp` tetapi tidak `mygit/prog.cpp`

Ia bertambah menarik dengan penggunaan dua *asterisk* ("`**`"), di mana corak dipadankan dengan laluan direktori sepenuhnya:

* Awalan "`**`" diikuti dengan `/` bermaksud padankan di dalam semua direktori. Contohnya:

    * "`**/mygit`" berfungsi sama dengan corak "`mygit`" dan dipadankan dengan fail atau direktori bernama `mygit`

    * "`**/mygit/tools`" memadankan fail atau direktori bernama `tools` di bawah direktori `mygit`

* Akhiran "`**`" akan dipadankan dengan semua yang berada di dalam. Contohnya `"tools/**"` akan mengabaikan semua kandungan direktori bernama `tools`

* Sekiranya "`**`" berada di tengah, ia akan dipadankan dengan semua direktori di antaranya. Contohnya "`mygit/**/temp`" akan dipadankan dengan `mygit/temp`, `mygit/tool1/temp`, `mygit/tool2/module/temp`

Sekiranya fail yang hendak diabaikan telah disimpan ke dalam *repository* sebelumnya, gunakan `git rm --cached`
