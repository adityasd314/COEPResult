"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
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
    yearOfStudy: z.enum(yearOfStudy),
    semester: z.enum(semester),
});

export function UserForm() {
    // ...
    const [year, setYear] = useState("")
    const [sem, setSem] = useState("")
    const [MIS, setMIS] = useState("")
    const handleMISChange = (e)=>{
        console.log(e)
        setMIS(Number(e.target.value));
    }
    const handleSemesterChange = (value)=>{
        setSem(value);
    }
    const handleYearChange = (value)=>{
        
        setYear(value);
    }
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            mis: 612203036,
            yearOfStudy: "FY",
            semester: "I",
        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log({semester:sem, mis:MIS, yearOfStudy:year})
        axios
            .post("/api/data", {semester:sem, mis:MIS, yearOfStudy:year})
          .then((res) => {
            console.log(res);
            });
        console.log(Object(values));
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
                                <Select onValueChange={handleYearChange} defaultValue="FY">
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
                                <Select defaultValue="I" onValueChange={handleSemesterChange}>
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
                                <Input type="number" onInput={handleMISChange} placeholder="MIS" {...field} />
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
