'use client';

import {ColorfulButton} from "@/components/generic/buttons/colorfulbuttons";
import {Button} from "@/components/generic/buttons/button";

export function AboutMeChoiceButtons() {
    return (
        <div className="flex justify-start mt-4 gap-4">
            <Button>Me</Button>
            <Button>Frontend</Button>
            <Button>Backend</Button>
            <Button>DevOps</Button>
        </div>
    );
}
