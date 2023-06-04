const chai = window.chai
const expect = chai.expect

describe('retornaTotalPessoasLista', () => 
{
  it('verificar se o total de pessoas na lista está correto', () => 
  {
    expect(retornaTotalPessoasLista(pessoas)).to.deep.equal(9)
  })
})