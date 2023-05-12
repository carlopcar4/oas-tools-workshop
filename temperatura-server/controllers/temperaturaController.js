import * as service from '../services/temperaturaService.js';

export function getTemperaturas(req, res) {
    service.getTemperaturas(req, res);
}

export function findByid(req, res) {
    service.findByid(req, res);
}

