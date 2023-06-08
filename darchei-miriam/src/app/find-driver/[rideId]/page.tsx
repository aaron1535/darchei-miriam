import styles from './page.module.css'

export default function FindDriver({ params }: any) {
  // console.log(params);
  // console.log(`Finding driver for ${params.id}`);
  return <>
    <h1 className={styles.div}>Finding driver for ride id: {params.rideId} </h1>
  </>
}