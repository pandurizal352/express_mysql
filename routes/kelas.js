var express = require('express');
var router = express.Router();
var kelas = require('../controller/kelascontroller')
/**
 * INDEX Kelas
 */
router.get('/', kelas.getAllkelas);
/*
 * INDEX Kelas berdasarkan id
 */
router.get('/:id', kelas.getKelasId);
/**
 * STORE POST kelas
 */
router.post('/',kelas.createKelas);
/*
 * UPDATE kelas
 */
router.put('/:id', kelas.updateKelas);
/*
 * DELETE kelas
 */
router.delete('/:id', kelas.deleteKelas);
module.exports = router;







//file kelas tanpa controller

// var express = require('express');
// var router = express.Router();
// //import database
// var connection = require('../library/database');




// /**
//  * INDEX KELAS
//  */
// router.get('/', function (req, res) {
//  //query
//  connection.query('SELECT * FROM kelas', function (err, rows) {
//  if (err) {
//  res.send('error', err);
//  res.json({
//  data: ''
//  });
//  } else {
//  //menampilkan hasil data kelas
//  res.json( {
//  data: rows // <-- tampilkan data kelas
//  });
//  }
//  });
// });

// /*
//  * INDEX Kelas berdasarkan id
//  */
// router.get('/:id', function (req, res) {
//     let id = req.params.id;
//     //query
//     connection.query('SELECT * FROM kelas WHERE id ='+ id, function (err, rows) {
//     if (err) {
//     res.send('error', err);
//     res.json({
//     data: ''
//     });
//     } else {
//     res.json( {
//     data: rows
//     });
//     }
//     });
//    });
   
// /*
//  * INDEX Kelas berdasarkan id
//  */
// router.get('/:id', function (req, res) {
//  let id = req.params.id;
//  //query
//  connection.query('SELECT * FROM kelas WHERE id ='+ id, function (err, rows) {
//  if (err) {
//  res.send('error', err);
//  res.json({
//  data: ''
//  });
//  } else {
//  res.json( {
//  data: rows
//  });
//  }
//  });
// });

// /**
//  * STORE POST kelas
//  */
// router.post('/', function (req, res) {

//     let nama_jurusan = req.body.nama_jurusan;
//     let Deskripsi = req.body.Deskripsi;
//     let errors = false;
//     if(!nama_jurusan) {
//     errors = true;
//     res.json({pesan :'Field nama_jurusan belum diisi, Field harus diisi dengan lengkap'});
//     }
//     if(!Deskripsi) {
//     errors = true;
//     res.json({pesan :'Field Deskripsi belum diisi, Field harus diisi dengan lengkap'});
//     }
//     // if no error
//     if(!errors) {
//     let formData = {
//     nama_jurusan: nama_jurusan,
//     Deskripsi: Deskripsi
//     }
   
//     // insert query
//     connection.query('INSERT INTO kelas SET ?', formData, function(err, result) {
//     //if(err) throw err
//     if (err) {
//     res.json({pesan :'Data gagal disimpan'});
//     } else {
//      res.send('Data Berhasil Disimpan!');
//     }
// })
//     }
// })

// /*
//  * UPDATE kelas
//  */
// router.put('/:id', function(req, res) {
//     let id = req.params.id;
//     let nama_jurusan = req.body.nama_jurusan;
//     let Deskripsi = req.body.Deskripsi;
//     let errors = false;
//     if(!nama_jurusan) {
//     errors = true;
//     res.json({pesan :'Field nama_jurusan tidak boleh kosong'});
//     }
//     if(!Deskripsi) {
//     errors = true;
//     res.json({pesan :'Field Deskripsi tidak boleh kosong'});
//     }
//     // if no error
//     if( !errors ) {
//     let formData = {
//     nama_jurusan: nama_jurusan,
//     Deskripsi: Deskripsi
//     }
//     // update query
//     connection.query('UPDATE kelas SET ? WHERE id = ' + id, formData, function(err, result) {
//     //if(err) throw err
//     if (err) {
//     res.send('error', err);
//     res.json({
//     id: req.params.id,
//     nama_jurusan: formData.nama_jurusan,
//     Deskripsi: formData.Deskripsi
//     })
//     } else {
//     res.send('Data Berhasil Diupdate!');
//     }
//     })
//     }
//    })

//    /*
//  * DELETE kelas
//  */
// router.delete('/:id', function(req, res) {
//     let id = req.params.id;
   
//     connection.query('DELETE FROM kelas WHERE id = ' + id, function(err, result) {
//     if (err) {
//     res.send('error', err)
//     } else {
//     res.send('Data Berhasil Dihapus!')
//     }
//     })
//    })


module.exports = router;