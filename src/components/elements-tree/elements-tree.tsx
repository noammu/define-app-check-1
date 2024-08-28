import classNames from 'classnames';
import styles from './elements-tree.module.scss';
import commonStyles from '@styles/common-styles.module.scss';
import { ReactComponent as ViteSvg } from '../../assets/svg/vite.svg';
import { ReactComponent as ReactSvg } from '../../assets/svg/react.svg';

export interface ElementsTreeProps {
    className?: string;
}

export const ElementsTree = ({ className }: ElementsTreeProps) => {
    const someExpression = 'some expression';
    return (
        <div className={classNames(styles.root, className)}>
            <header className={styles.header}>
                <ViteSvg />
                <nav>
                    <a href="/home">Home</a> | <a href="/projects">Projects</a> |{' '}
                    <a href="/about">About</a> | <a href="/contact">Contact Us</a>
                </nav>
                <ReactSvg />
            </header>
            <div className={styles.div1}>
                <aside className={styles.aside1}>
                    <ol>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                    </ol>
                </aside>
                <main>
                    <h1>Headdding 1</h1>
                    <p>{someExpression}</p>
                    <section>
                        <article>
                            <div>
                                <p>
                                    Thank u thank u thank u far to kind
                                    P&#123;@#&#123;&#125;@#R@&#125;r@R@ T#^%*^($^%#@$#!
                                </p>
                            </div>
                        </article>
                        <article>
                            <form>
                                <label>First name:</label>
                                <br />
                                <input type="text" />
                                <br />
                                <label>Last name:</label>
                                <br />
                                <input type="text" className={styles.input1} />
                                <br />
                                <br />
                                <input type="submit" value="Submit" />
                            </form>
                        </article>
                    </section>
                    <section>
                        <img
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                            alt=""
                            height="80"
                        />
                    </section>
                    <section>
                        <video
                            controls={true}
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"
                            className={styles.video1}
                        />
                    </section>
                </main>
            </div>
            <footer>
                <a href="/">Link</a>
                <>
                    <span>I am inside of a fragment and span!</span>
                </>
            </footer>
        </div>
    );
};
