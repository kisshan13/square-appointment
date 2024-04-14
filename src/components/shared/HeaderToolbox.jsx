"use client";

import { Select, TextField } from "@radix-ui/themes"

export default function HeaderToolbox() {
    return (
        <nav className="grid grid-cols-2 gap-5 py-2 ">
            <Select.Root>
                <Select.Trigger placeholder="Pick a fruit">
                </Select.Trigger>
                <Select.Content>
                    <Select.Group>
                        <Select.Item>Shankar Nagar (Raipur)</Select.Item>
                    </Select.Group>
                </Select.Content>
            </Select.Root>

            <TextField.Root placeholder="Search something">
            </TextField.Root>
        </nav>
    )
}
