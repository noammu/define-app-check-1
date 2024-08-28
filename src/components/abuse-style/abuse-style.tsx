import classNames from 'classnames';
import styles from './abuse-style.module.scss';
import commonStyles from '@styles/common-styles.module.scss';

export interface AbuseStyleProps {
    className?: string;
}

export const AbuseStyle = ({ className }: AbuseStyleProps) => {
    return (
        <div className={classNames(styles.root, className, styles.fromStyleSheet)}>
            <button className={styles.www}>Button</button>
            <div className={styles.div1}>
                <p>This is a paragraph.</p>
            </div>
            <h1
                className={classNames(
                    styles.q,
                    styles.w,
                    styles.r,
                    styles.e,
                    styles.t,
                    styles.y,
                    styles.u,
                    styles.i,
                    styles.a,
                    styles.s,
                    styles.d,
                    styles.f,
                )}
            >
                Heading 1
            </h1>
            <h1>Heading 2</h1>
            <h1>Heading 2</h1>
            <h1>Heading 2</h1>
            <h1>Heading 1</h1>
            <h1>Heading 2</h1>
            <h1>Heading 1</h1>
            <h1>Heading 2</h1>
            <h1>Heading 1</h1>
            <h1>Heading 1</h1>
            <h1>Heading 1</h1>
            <h1>Heading 1</h1>
            <h1>Heading 1</h1>
            <h1>Heading 1</h1>
            <h1>Heading 1</h1>
            <h1>Heading 1</h1>
            <h1 className={styles.header1}>Heading 1</h1>
            <h1 className={styles.header2}>
                Heading 1111111111111111111111111111111111111111111111111111
            </h1>
            <h1>Heading 1111111111111111111111111111111111111111111111111111</h1>
            <h1>Heading 1</h1>
            <h1>Heading 1</h1>
            AbuseStyle<h1>Heading 1</h1>
            <button>Button</button>
        </div>
    );
};
