import styles from '../index.less'

const VideoSection: React.FC<{}> = () => {
    return (
        <video autoPlay loop muted className={styles.banner_video}>
            <source src="https://gzecloud.oss-cn-guangzhou.aliyuncs.com/泷铧官网资源/Comp-1_1-converted-with-Clipchamp.mp4?versionId=CAEQCRiBgICB.7ChyBciIDI1OTU0N2VlZGEwNzQyNTJiNmNhNGY2ZmU2N2QyYmYw" type="video/mp4" />
        </video>
    )
}

export default VideoSection