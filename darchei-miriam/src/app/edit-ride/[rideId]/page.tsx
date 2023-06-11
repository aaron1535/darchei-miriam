import styles from './page.module.css'

export default function EditRide({ params } : any) {
    // console.log(`editing ride id:${params.rideId}`);
    return <>
      <h1 className={styles.div}>Editing ride id: {params.rideId} </h1>
    </>
  }