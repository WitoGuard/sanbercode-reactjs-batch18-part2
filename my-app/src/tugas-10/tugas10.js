import React from 'react';

class NamaBuah extends React.Component {
    render() {
        return (
                <>
                <>{this.props.nama}</>
                <>{this.props.harga}</>
                <>{this.props.berat}</>
                </>
        ) 
        
    } 
}    


function Buah(){
    let dataHargaBuah = [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
    ]
    return(   
        <>
            <h1 style={{marginBottom:"20px", textAlign:"center"}}>Tabel Harga Buah</h1>
            <table style={{border: "1px solid black", margin: "0 auto"}}>
            <thead>
                <tr>
                    <td style={{border: "1px solid black", width: "300px", backgroundColor: "grey", textAlign:"center", fontWeight:"bold"}}>Nama</td>
                    <td style={{border: "1px solid black",width: "200px", backgroundColor: "grey", textAlign:"center", fontWeight:"bold"}}>Harga</td>
                    <td style={{border: "1px solid black",width: "200px", backgroundColor: "grey", textAlign:"center", fontWeight:"bold"}}>Berat</td>
                </tr>
            </thead>
            <tbody>
                {dataHargaBuah.map(item=> {
                    return (
                    <tr>
                        <td style={{border: "1px solid white", backgroundColor:"orange"}}><NamaBuah nama={item.nama}/></td>
                        <td style={{border: "1px solid white", backgroundColor:"orange"}}><NamaBuah harga={item.harga}/></td>
                        <td style={{border: "1px solid white", backgroundColor:"orange"}}><NamaBuah berat={item.berat/1000}/> kg</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </>
        )
    }


export default Buah