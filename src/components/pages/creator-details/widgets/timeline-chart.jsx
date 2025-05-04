import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Custom vertical legend
const CustomLegend = ({ payload }) => {
  return (
    <div className="flex flex-col gap-4 pl-4">
      {payload?.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm text-muted-foreground">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

const TimelineChart = ({ data, isLoading }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Release Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="h-[300px] w-full flex flex-col gap-4">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-[240px] w-full rounded-md" />
          </div>
        ) : (
          <ChartContainer config={{}}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="year" tick={{ fontSize: 10 }} interval={9} />
                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                <Tooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="#1d4ed8" />
                <Legend
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  content={<CustomLegend />}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default TimelineChart;
