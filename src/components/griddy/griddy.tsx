import classNames from 'classnames';
import styles from './griddy.module.scss';
import commonStyles from '@styles/common-styles.module.scss';
import EspeonPng from '../../assets/espeon.png';
import ProfilePicJpg from '../../assets/profile       pic.jpg';
import PikachuPng from '../../assets/pikachu.png';
import { importMe } from '/src/_codux/boards/griddy/griddy.board';

export interface GriddyProps {
    className?: string;
    numnum: number;
}

export const Griddy = ({ className,numnum }: GriddyProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.grid}>
                <p>The number: {numnum} </p>
                <p>{importMe}</p>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                />
                <img src={EspeonPng} alt="" height="178" />
                <img src={PikachuPng} alt="" height="444" className={styles.img2} />
                <img src={ProfilePicJpg} alt="" height="178" className={styles.img1} />
                <h2>Replace content</h2>
            </div>
        </div>
    );
};
