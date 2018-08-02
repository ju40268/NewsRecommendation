# Install Mongodb

```
~$ brew update
~$ brew install mongodb

==> Summary
🍺  /usr/local/Cellar/python@2/2.7.15_1: 4,672 files, 82.6MB
==> Installing mongodb
==> Downloading https://homebrew.bintray.com/bottles/mongodb-4.0.0.high_sierra.bottle.tar.gz
######################################################################## 100.0%
==> Pouring mongodb-4.0.0.high_sierra.bottle.tar.gz
==> Caveats
To have launchd start mongodb now and restart at login:
  brew services start mongodb
Or, if you don't want/need a background service you can just run:
  mongod --config /usr/local/etc/mongod.conf
==> Summary
🍺  /usr/local/Cellar/mongodb/4.0.0: 18 files, 268.7MB
==> Caveats
==> sqlite
This formula is keg-only, which means it was not symlinked into /usr/local,
because macOS provides an older sqlite3.

If you need to have this software first in your PATH run:
  echo 'export PATH="/usr/local/opt/sqlite/bin:$PATH"' >> ~/.zshrc

For compilers to find this software you may need to set:
    LDFLAGS:  -L/usr/local/opt/sqlite/lib
    CPPFLAGS: -I/usr/local/opt/sqlite/include

==> python@2
Pip and setuptools have been installed. To update them
  pip install --upgrade pip setuptools

You can install Python packages with
  pip install <package>

They will install into the site-package directory
  /usr/local/lib/python2.7/site-packages

See: https://docs.brew.sh/Homebrew-and-Python
==> mongodb
To have launchd start mongodb now and restart at login:
  brew services start mongodb
Or, if you don't want/need a background service you can just run:
  mongod --config /usr/local/etc/mongod.conf


# in one terminal
~$ mongod
# another terminal
~$ sudo sevice mongod start, or mongo

```