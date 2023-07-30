import  http  from 'k6/http'
import { check }  from 'k6'
import { Counter } from 'k6/metrics' 
import { Gauge } from 'k6/metrics'
import { Rate } from 'k6/metrics'
import { Trend } from 'k6/metrics'

export const options = {
    vus: 1,
    duration: '3s'
}

//Contador
const chamadas = new Counter('quantidade de chamadas')
//Medidor
const myGauge = new Gauge('Tempo bloqueado')
//Taxa
const myRate = new Rate('Taxa req 200')
//Tendência
const myTrend = new Trend('Taxa de espera')

export default function() {
    const req = http.get('http://test.k6.io/')
    chamadas.add(1)
    myGauge.add(req.timings.blocked)
    myRate.add(req.status === 200)
    myTrend.add(req.timings.waiting)
}