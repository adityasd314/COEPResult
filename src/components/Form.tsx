"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import axios from "axios";

const yearOfStudy = ["FY", "SY", "TY", "BY"];
const semester = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
const formSchema = z.object({
    mis: z
        .number()
        .max(999999999, { message: "MIS must be 9 digits" })
        .min(111111111, {
            message: "MIS must be 9 digits",
        }),
    yearOfStudy: z.enum(yearOfStudy),
    semester: z.enum(semester),
});

export function UserForm() {
    // ...
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            mis: 612203036,
            yearOfStudy: "FY",
            semester: "I",
        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        axios
            .post("/api/data", values)
          .then((res) => {
            console.log(res);
            });
        console.log(values);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="yearOfStudy"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Year Of Study</FormLabel>
                            <FormControl>
                                <Select defaultValue="FY">
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="FY" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {yearOfStudy.map((item) => (
                                            <SelectItem key={item} value={item}>
                                                {item}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="semester"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Semester</FormLabel>
                            <FormControl>
                                <Select defaultValue="I">
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="I" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {semester.map((item) => (
                                            <SelectItem key={item} value={item}>
                                                {item}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="mis"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>MIS</FormLabel>
                            <FormControl>
                                <Input placeholder="MIS" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
