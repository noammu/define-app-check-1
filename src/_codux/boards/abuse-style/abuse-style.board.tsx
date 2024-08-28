import { AbuseStyle } from '../../../components/abuse-style/abuse-style';
import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '/src/_codux/board-wrappers/component-wrapper';

export default createBoard({
    name: 'AbuseStyle',
    Board: () => (
        <ComponentWrapper settings={{}}>
            <ContentSlot>
                <AbuseStyle />
            </ContentSlot>
        </ComponentWrapper>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: { right: 0, bottom: 0, left: 0, top: 0 },
    },
});
