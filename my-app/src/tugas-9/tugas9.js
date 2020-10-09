import React from 'react';

class Form extends React.Component {
    render() {
        return(   
    <>
    <form style={{width: "500px",height:"500" ,margin:"0 auto", padding: "20px", border:"3px solid", borderRadius: "10px"}}>
      <h2 style={{textAlign:"center"}}>Form Pembelian Buah</h2>
      <label for="nama" style={{display: "inline-block", width: "200px", textAlign:"left", fontWeight:"bold"}}>Nama Pelanggan</label>
      <input type="name" name="nama"/>
      <br/>
      <br/>
      <label for="Daftar" style={{display: "inline-block", width: "200px", textAlign:"left", fontWeight:"bold"}}>Daftar Item</label>
      <div style={{display:"inline-block"}}>
        <input type="checkbox" name="semangka"/>
        <label for="semangka">Semangka</label> <br/>
        <input type="checkbox" name="jeruk"/>
        <label for="jeruk">Jeruk</label> <br/>
        <input type="checkbox" name="nanas"/>
        <label for="nanas">Nanas</label> <br/>
        <input type="checkbox" name="salak"/>
        <label for="salak">Salak</label> <br/>
        <input type="checkbox" name="anggur"/>
        <label for="anggur">Anggur</label> <br/>
      </div> <br/> <br/>
      <button type="submit" class="submit-btn" style={{borderRadius:"10px"}}>Kirim</button>                      
    </form>
    </>
    )
    }
}

export default Form