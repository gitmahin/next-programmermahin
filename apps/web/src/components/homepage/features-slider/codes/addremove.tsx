import { CodeBlockWithoutTypes } from "@/components/shiki/codeBlockWithoutTypes";

const code = `
#include <iostream>

int main() {
    bool isPassion = true // [!code --]
    bool passion = true; // [!code ++]
    bool isTired = false // [!code --]
    bool tired = false; // [!code ++]

    while (passion) {
        if (tired) {
            recharge();
        } else {
            buildDreams();
            pushLimits(); // [!code ++]
        }
        reflect(); // [!code ++]
        learn(); 
    }

    std::cout << "return legacy;" << std::endl;
    return 0;
}
`;

export const AddRemoveCodeExample = () => {
  return (
    <CodeBlockWithoutTypes lang="c++" className="text-[14px]">
      {code}
    </CodeBlockWithoutTypes>
  );
};
