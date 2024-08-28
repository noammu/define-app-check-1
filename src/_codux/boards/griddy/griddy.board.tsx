import { Griddy } from '../../../components/griddy/griddy';
import { ContentSlot, createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '/src/_codux/board-wrappers/component-wrapper';

export const importMe = 'I am imported';
const num1 = 1;
const num2 = 2;

export default createBoard({
    name: 'Griddy',
    Board: () => (
        <ComponentWrapper settings={{}}>
            <ContentSlot>
                <Griddy numnum={num1} />
            </ContentSlot>
        </ComponentWrapper>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: { right: 0, bottom: 0, left: 0, top: 0 },
    },
});
