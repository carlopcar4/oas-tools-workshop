export function getTemperaturas(req, res) {
    res.send([{
        "date": 2005,
        "id": 17104,
        "stations_id": 4,
        "maxtemp": 36.46,
        "mintemp": 17.63,
        "averagetemp": 27.24,
        "location": "Cádiz"
    }]);
}

export function findByid(req, res) {
    res.send({
        "date": 2005,
        "id": 17104,
        "stations_id": 4,
        "maxtemp": 36.46,
        "mintemp": 17.63,
        "averagetemp": 27.24,
        "location": "Cádiz"
    });
}

