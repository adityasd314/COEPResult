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

export function TableView({ data }) {
    return (
        <div>
            <h1 className="text-center">{data.result.details}</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">
                            Subject Name
                        </TableHead>
                        <TableHead>Credit</TableHead>
                        <TableHead className="text-right">Grade</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Object.entries(data.result.subjectWise).map(
                        ([subject, grade]) => {
                            const [cred, gradeErnd] = grade.split(":");
                            return (
                                <TableRow>
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
