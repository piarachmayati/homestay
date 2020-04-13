import React, {Component} from "react";

class Homestay extends Component {
    render() {
        const judul = `${this.props.homestay.nama}
                       - Rp. ${this.props.homestay.harga} rb`
        const style = {
            backgroundImage: `url('${this.props.homestay.fotoUrl}')`
        };

        return (
            <div className="homestay">
                <div className="homestay-foto" style={style}> </div>
                <div className="homestay-judul">{judul}</div>
            </div>
        );
    }
}

export default Homestay;