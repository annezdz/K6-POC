import  http  from 'k6/http'
import { check }  from 'k6'

export const options = {
    vus: 1,
    duration: '30s',
    thresholds: {
        http_req_failed: ['rate < 0.01'], // taxa de falhas para esse teste seja inferior a 1%.
        http_req_duration: [{threshold: 'p(95) < 200', abortOnFail: true, delayAbortEval: '10s'} ] ,
        checks: ['rate > 0.99']
    }
}

export default function() {
    const res = http.get('http://test.k6.io/')
    check(res , {
        'status code é 200': (r) => r.status === 200
    })
}