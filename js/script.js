const nama = "daraga";
let usia = 19;

let biodata = document.getElementById("biodata");

function generateBiodata() {
  let golongan;

  if (usia >= 10 && usia < 20) {
    golongan = "golongan remaja";
  } else if (usia >= 20) {
    golongan = "golongan dewasa";
  } else {
    golongan = "golongan belum dewasa";
  }

  return (biodata.innerHTML = golongan);
}

console.log(`Nama saya adalah ${nama} dan usia saya ${usia} tahun`);
generateBiodata();
