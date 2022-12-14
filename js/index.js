document.getElementById("ketqua").onclick = function () {
  var diemchuan = document.getElementById("diemchuan").value * 1;
  var diem1 = document.getElementById("diem1").value * 1;
  var diem2 = document.getElementById("diem2").value * 1;
  var diem3 = document.getElementById("diem3").value * 1;
  var khuvuc = document.getElementById("khuvuc").value;
  var doituong = document.getElementById("doituong").value;
  var diemkhuvuc =
    khuvuc == "A" ? 2 : khuvuc == "B" ? 1 : khuvuc == "C" ? 0.5 : 0;
  var diemdoituong =
    doituong == "1" ? 2.5 : doituong == "2" ? 1.5 : doituong == "3" ? 1 : 0;
  var tongdiem = "";
  tongdiem = diem1 + diem2 + diem3 + diemdoituong + diemkhuvuc;
  if (tongdiem > diemchuan) {
    document.getElementById(
      "inra"
    ).innerHTML = `Bạn đã đỗ với tổng điểm: ${tongdiem}`;
  } else {
    document.getElementById(
      "inra"
    ).innerHTML = `Bạn rớt với tổng điểm: ${tongdiem}`;
  }
};

document.getElementById("tiendien").onclick = function () {
  var sokw = document.getElementById("sokw").value * 1;
  var tiendien = "";
  if (sokw <= 50) {
    tiendien = sokw * 500;
  } else if (sokw <= 100) {
    tiendien = 50 * 500 + (sokw - 50) * 650;
  } else if (sokw <= 150) {
    tiendien = 50 * 500 + 50 * 650 + (sokw - 100) * 850;
  } else if (sokw <= 200) {
    tiendien = 50 * 500 + 50 * 650 + 50 * 850 + (sokw - 150) * 1100;
  } else {
    tiendien = 50 * 500 + 50 + 650 + 50 * 850 + 50 * 1100 + (sokw - 200) * 1100;
  }
  document.getElementById(
    "tiencantra"
  ).innerHTML = `Số tiền điện cần trả: ${tiendien}`;
};

document.getElementById("tienThueThuNhap").onclick = function () {
  var tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
  var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  var thuNhapChiuThue = "";
  thuNhapChiuThue = tongThuNhapNam - 4 - soNguoiPhuThuoc * 1.6;
  var tienThueThuNhap =
    thuNhapChiuThue <= 60
      ? thuNhapChiuThue * 0.05
      : thuNhapChiuThue <= 120
      ? thuNhapChiuThue * 0.1
      : thuNhapChiuThue <= 210
      ? thuNhapChiuThue * 0.15
      : thuNhapChiuThue <= 384
      ? thuNhapChiuThue * 0.2
      : thuNhapChiuThue <= 624
      ? thuNhapChiuThue * 0.25
      : thuNhapChiuThue <= 960
      ? thuNhapChiuThue * 0.3
      : thuNhapChiuThue > 960
      ? thuNhapChiuThue * 0.35
      : 0;
  document.getElementById(
    "bai3"
  ).innerHTML = `Tiền thuế thu nhập 1 năm: ${tienThueThuNhap} Triệu`;
};

var soKetnoi = document.querySelector("#soKetNoi");
soKetnoi.style.display = "none";
var loaiKhachHang = document.getElementById("loaiKhachHang");
loaiKhachHang.onchange = function () {
  if (loaiKhachHang.value === "doanhNghiep") {
    soKetnoi.style.display = "block";
  } else {
    soKetnoi.style.display = "none";
  }
};
document.getElementById("tiencap123").onclick = function () {
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  var maKhachHang = document.getElementById("maKhachHang").value;
  var soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
  var soKetNoi = document.getElementById("soKetNoi").value * 1;
  var tiencap;
  console.log(soKetNoi);
  if (loaiKhachHang == "nhaDan") {
    tiencap = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
  } else {
    if (soKetNoi >= 10) {
      tiencap = 15 + 75 + (soKetNoi - 10) * 5 + 50 * soKenhCaoCap;
    } else {
      tiencap = 15 + 7.5 * soKetNoi + 50 * soKenhCaoCap;
    }
  }
  document.getElementById("bai4").innerHTML = `Mã khách hàng: ${maKhachHang} `;
  document.getElementById("bai4").innerHTML = `Tiền cáp: ${tiencap} Đô`;
};
