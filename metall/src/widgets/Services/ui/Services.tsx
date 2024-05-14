import styles from './Services.module.scss';
import Card from './@Card/Card';

const Services = () => {
  const highlightedText = 'Эта услуга незаменима для тех';
  const textWrap = `${highlightedText}, кто ценит время, качество и хочет избежать механической деформации прутков, что может произойти при разматывании вручную. Кроме того, размотанная арматура или проволока удобнее транспортировать, и заказ услуги у профессионалов позволяет экономить на стоимости размотки и рационально использовать материал.`;

  return (
    <div className={styles.Services}>
      <div className={styles.Card1}>
        <Card
          img="/icon/Valve1.png"
          title="Размотка арматуры"
          text1=" — процесс, при котором поставляемая в бухтах смотанная арматура распускается в прямой отрезок определённой длины, называемый прутком. Этот процесс осуществляется на специальных станках, обеспечивающих точность резки и сохранение качества материала. "
          text2={textWrap}
          highlightedText={highlightedText}
        />
      </div>
    </div>
  );
};

export default Services;