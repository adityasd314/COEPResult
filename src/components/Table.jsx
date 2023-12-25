import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export function TableView({ data }) {
    return (
        <div>
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-center">{data.result.details}</h1>
                <Button
                    className="m-2 hide-on-print"
                    onClick={() => window.print()}
                >
                    Download
                </Button>
            </div>
            <div className="flex gap-10">
                <h2 className="m-10">SGPA: {data.result.score.SGPA}</h2>
                <h2>&nbsp;&nbsp;</h2>
                <h2 className="m-2">CGPA: {data.result.score.CGPA}</h2>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">
                            Subject Name
                        </TableHead>
                        <TableHead>Pointer</TableHead>
                        <TableHead className="text-right">Grade</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Object.entries(data.result.subjectWise).map(
                        ([subject, grade], i) => {
                            const [cred, gradeErnd] = grade.split(":");
                            return (
                                <TableRow key={i}>
                                    <TableCell className="font-medium">
                                        {subject}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {cred}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {gradeErnd}
                                    </TableCell>
                                </TableRow>
                            );
                        }
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
