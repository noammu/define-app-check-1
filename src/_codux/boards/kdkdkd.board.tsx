import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '/src/_codux/board-wrappers/component-wrapper';
import styles from './kdkdkd.board.module.scss';

export default createBoard({
    name: 'kdkdkd',
    Board: () => (
        <ComponentWrapper settings={{}}>
            <ContentSlot>
                <div className={styles.ddd} />
            </ContentSlot>
        </ComponentWrapper>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: { right: 0, bottom: 0, left: 0, top: 0 },
    },
});
