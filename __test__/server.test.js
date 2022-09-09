'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);


describe('API server', () => {
  it('Home page', async () => {
    const res = await request.get('/');
    expect(res.status).toEqual(200);
    expect(res.text).toEqual('Hellooooooo from Home Route');
  });

  it('Is the square works', async () => {
    const res = await request.get('/square').query('num= 5');
    expect(res.status).toEqual( 200 );
    expect(res.text).toEqual('{\"num\":25}');
  });

  it('Is the square fails', async () => {
    const res = await request.get( '/square' );
    expect(res.status).toEqual(500);
  });
});
