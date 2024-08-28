import { ElementsTree } from '../../../components/elements-tree/elements-tree';
import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '/src/_codux/board-wrappers/component-wrapper';

export default createBoard({
    name: 'ElementsTree',
    Board: () => (
        <ComponentWrapper settings={{}}>
            <ContentSlot>
                <ElementsTree />
            </ContentSlot>
        </ComponentWrapper>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: { right: 0, bottom: 0, left: 0, top: 0 },
    },
});
