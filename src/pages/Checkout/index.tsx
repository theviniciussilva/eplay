import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row, TabButton } from './styles'

import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'
import { useFormik } from 'formik'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
              />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input
                onChange={form.handleChange}
                type="email"
                id="deliveryEmail"
                name="deliveryEmail"
                value={form.values.deliveryEmail}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input
                onChange={form.handleChange}
                type="email"
                id="confirmDeliveryEmail"
                name="confirmDeliveryEmail"
                value={form.values.confirmDeliveryEmail}
              />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="Boleto" />
            Boleto bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartao} alt="Cartão de crédito" />
            Cartão de crédito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input
                      onChange={form.handleChange}
                      id="cardOwner"
                      type="text"
                      name="cardOwner"
                      value={form.values.cardOwner}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão
                    </label>
                    <input
                      onChange={form.handleChange}
                      id="cpfCardOwner"
                      type="text"
                      name="cpfCardOwner"
                      value={form.values.cpfCardOwner}
                    />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      onChange={form.handleChange}
                      id="cardDisplayName"
                      type="text"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      onChange={form.handleChange}
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                    />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresMonth">Mês do vencimento</label>
                    <input
                      onChange={form.handleChange}
                      id="expiresMonth"
                      type="text"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                    />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input
                      onChange={form.handleChange}
                      id="expiresYear"
                      type="text"
                      name="expiresYear"
                      value={form.values.expiresYear}
                    />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      onChange={form.handleChange}
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                    />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select
                      onChange={form.handleChange}
                      id="installments"
                      name="installments"
                      value={form.values.installments}
                    >
                      <option>1x de R$ 200,00</option>
                      <option>2x de R$ 200,00</option>
                      <option>3x de R$ 200,00</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button
        variant="primary"
        type="button"
        title="Clique aqui para finalizar a compra"
      >
        Finalizar compra
      </Button>
    </form>
  )
}

export default Checkout
