import React from 'react';

class ListForm extends React.Component{
    constructor(props){
      super(props)
      this.state ={
        dataHargaBuah : [
            {nama: "Semangka", harga: 10000, berat: 1000},
            {nama: "Anggur", harga: 40000, berat: 500},
            {nama: "Strawberry", harga: 30000, berat: 400},
            {nama: "Jeruk", harga: 30000, berat: 1000},
            {nama: "Mangga", harga: 30000, berat: 500}
        ],  
        inputBuah : "",
        inputPrice: "",
        inputWeight: "",
        index: -1    
      }
      this.handleEdit = this.handleEdit.bind(this)
    }
    
    
handleSubmit(event){
  event.preventDefault()
  let index = this.state.index
  let inputBuah = this.state.inputBuah
  let inputPrice = this.state.inputPrice
  let inputWeight = this.state.inputWeight
  let dataHargaBuah = this.state.dataHargaBuah
  if (index === -1){
    this.setState({
        dataHargaBuah: [...dataHargaBuah,{nama:inputBuah, harga:inputPrice, berat: inputWeight}],
        inputBuah: "",
        inputPrice: "",
        inputWeight: "",
    })
  }else{
    this.setState({
        dataHargaBuah: [...dataHargaBuah,{nama:inputBuah, harga:inputPrice, berat: inputWeight}],
        inputBuah: "",
        inputPrice: "",
        inputWeight: "",
    })
  }
}

handleEdit(event){
  let index = event.target.value;
  this.setState({inputBuah: this.state.dataHargaBuah[index], index})

}

handleChange = (event) =>{
  var value = event.target.value
  this.setState({
    inputBuah: value
  })
}

handleChange2 = (event) =>{
    var value = event.target.value
    this.setState({
      inputPrice: value
    })
}

handleChange3 = (event) =>{
    var value = event.target.value
    this.setState({
      inputWeight: value
    })
}

handleDelete = (event) =>{
  let index = event.target.value;
  this.state.dataHargaBuah.splice(index, 1)
  this.setState({dataHargaBuah: this.state.dataHargaBuah})
}

    render(){
      return(
        <>
          <h1>Tabel Harga Buah</h1>
          <table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
                {
                  this.state.dataHargaBuah.map(item=>{
                    return(                    
                      <tr>
                        <td>{item.nama}</td>
                        <td>{item.harga}</td>
                        <td>{item.berat/1000} kg</td>
                        <td>
                        <button  value={item} onClick={this.handleEdit}>Edit</button>
                        <button style={{marginLeft: "1em"}} value={item} onClick={this.handleDelete}>Delete</button>
                      </td>

                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
          <br/>
        <form style={{textAlign: "left"}} onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Masukkan nama Buah:
          </label>          
          <input type="text"  onChange={this.handleChange} value={this.state.inputBuah} />
          
          <label> <br/>
            Masukkan Harga:
          </label>          
          <input type="text"  onChange={this.handleChange2} value={this.state.inputPrice} />
          
          <label> <br/>
            Masukkan Berat:
          </label>          
          <input type="text"  onChange={this.handleChange3} value={this.state.inputWeight} /> <br/>
          <input type="submit" value="Submit" />
        </form>

        </>
      )
    }
  }

  export default ListForm

